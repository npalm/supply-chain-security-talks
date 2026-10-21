# You Trust More Code Than You Ship

We begin with a live, controlled attack on the software supply chain behind a vibe-coded application. The application works as expected; the compromise unfolds in the systems used to build and deliver it.

Delivery systems combine dependencies, build tooling, automation, and AI-assisted or agentic workflows. Much of this code never ships, yet it consumes untrusted input inside environments with source, tokens, cloud roles, and release access. Attackers do not always need to exploit the application. They need that input to execute with the access already there.

Recent waves of real-world compromises reveal the same progression: execution, credential theft, propagation, persistence, and difficult recovery. Some attacks reuse automation to spread at machine speed. AI did not create the pattern, but it adds more input, greater reach, and faster adaptation.

Once the attack path is visible, it can be broken. We translate each stage into an engineering control: verify and delay what runs, isolate untrusted execution, limit credentials, audit agent context, and prepare for recovery before one component can spread across the delivery system.
