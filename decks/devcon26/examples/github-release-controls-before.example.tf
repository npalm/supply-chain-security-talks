# Deliberately broad presentation anti-example; do not deploy.
# Contrast with github-release-controls.example.tf.
resource "github_repository_environment" "release" {
  repository          = "lunch-poll"
  environment         = "release"
  reviewers { teams = [] }
  prevent_self_review = false
  can_admins_bypass   = true
  # No deployment branch policy: branches and tags are unrestricted.
}

resource "github_branch_protection" "main" {
  repository_id       = "lunch-poll"
  pattern             = "main"
  enforce_admins      = false
  allows_force_pushes = false
  allows_deletions    = false
  required_pull_request_reviews {
    required_approving_review_count = 1
    pull_request_bypassers          = []
  }
}

# A job still needs environment: release and id-token: write.
# Protecting main does not restrict jobs on other refs from entering release.
