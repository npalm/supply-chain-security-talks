# Controlled demonstration delivery

## Selected delivery

**Live, as the published abstract promises** (confirmed by Niek, 21 October 2026). The current plan is **40:00**, retaining every slide. `timing.json` matches the 65-slide sequence: 57 prepared slides including the recording fallback, plus eight appendix slides. It reserves **4:00** for the live demo after slide 7. Slide 8 replaces live execution within that same slot if needed; it adds no time. Terminal animations and transitions are included in the slide budgets. This is a speaking plan to validate in rehearsal, leaving five minutes for questions in the 45-minute session.

| Checkpoint | Elapsed |
| --- | --- |
| Opening and demo complete · slide 10 | 07:00 |
| Incident mechanisms complete · slide 23 | 16:00 |
| AI and pattern complete · slide 30 | 20:30 |
| Input and execution controls complete · slide 43 | 29:30 |
| Identity and recovery complete · slide 52 | 37:00 |
| Closing visible · end of slide 57 | 40:00 |

## Media

The four requested originals were copied intact from the merged Prompt to Product source. Their originals remain untouched. `devcon-controlled-demo.webm` derives from the 69.8-second original through a selective blue-to-graphite background treatment. Sequence, timing and visible evidence remain the same. Its poster is an extracted frame. No raw scene rebuild was possible from tracked assets alone.

## Playback cues

1. Slide 4: play the working lunch-poll loop once, then pause.
2. After slide 7: switch to the live environment. Only return to slide 8 for the fallback; identify it as a recording and play with controls. The video is silent.
3. Narrate repository instructions and cloning, local installation, callback monitor, received demonstration values, and the working app. Use visible transitions instead of relying on exact timecodes.
4. Slide 9: the application still works. Name the demonstrated boundary: local install, repository identity, workflow and callback.
5. If playback fails, explain those steps using the poster; do not spend the safety margin troubleshooting.

## Claim boundaries

The inspected ci-checkr hook can create/push a workflow through an authenticated repository identity. The workflow serializes the Actions secrets context to the controlled callback. Synthetic values appear, and a GitHub-shaped value may be a real ephemeral job token. Do not describe every field as fake, every available credential as stolen, or production cloud access as demonstrated. No malicious hook was run to build this deck.

## Live version (primary)

Use a fresh disposable repository and narrowly scoped disposable identity, synthetic data and an isolated environment. Review the actual hook, workflow, callback and displayed fields. The four-minute slot includes the introduction on slide 7, switching environments and returning to the deck. Switch to the recording after 90 seconds without the expected callback; cap the whole segment at four minutes. Use the remaining slot for recorded narration and return to slide 9. Keep all slides; use the checkpoints above to pace delivery. Rehearse and document cleanup before presenting live.
