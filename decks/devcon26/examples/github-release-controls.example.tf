# Presentation example only. Adapt and review; never apply blindly.
# Existing repository; github provider authentication and configuration are external.
# Fictional team ID 123456 must be replaced with a team with repository read access.
# Required reviewers have visibility/plan restrictions; see examples/README.md.
resource "github_repository_environment" "release" {
  repository          = "lunch-poll"
  environment         = "release"
  reviewers { teams = [123456] }
  prevent_self_review = true
  can_admins_bypass   = false
  deployment_branch_policy {
    protected_branches     = false # Select custom policies; main remains protected below.
    custom_branch_policies = true
  }
}

# Exact branch policy; no wildcard and no tag policy.
resource "github_repository_environment_deployment_policy" "main" {
  repository     = "lunch-poll"
  environment    = github_repository_environment.release.environment
  branch_pattern = "main"
}

resource "github_branch_protection" "main" {
  repository_id        = "lunch-poll"
  pattern              = "main"
  enforce_admins       = true
  allows_force_pushes  = false
  allows_deletions     = false
  force_push_bypassers = []
  require_conversation_resolution = true
  required_status_checks {
    strict   = true
    contexts = ["ci"] # Replace with the real required check name.
  }
  required_pull_request_reviews {
    required_approving_review_count = 1
    require_code_owner_reviews      = true
    dismiss_stale_reviews           = true
    require_last_push_approval      = true
    pull_request_bypassers          = []
  }
}

# Configure CODEOWNERS for workflow/infrastructure paths, with a maintained team.
# Restrict policy/workflow edit rights; admin enforcement is not immutable policy.
# The release job must reference environment: release and authorize id-token: write.
# Validate checked-out code/promoted artifacts before the privileged job executes.
