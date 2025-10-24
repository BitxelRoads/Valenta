// This file will contain the JavaScript for the process section animation.

document.addEventListener('DOMContentLoaded', () => {
    const processStepsContainer = document.getElementById('process-steps-container');
    const step1 = document.getElementById('process-step-1');
    const step2 = document.getElementById('process-step-2');
    const step3 = document.getElementById('process-step-3');

    let currentStepIndex = -1; // -1 means no step is active initially

    const steps = [
        { element: step1, image: step1.querySelector('img') },
        { element: step2, image: step2.querySelector('img') },
        { element: step3, image: step3.querySelector('img') }
    ];

    function advanceAndShowIncomingStep() {
        currentStepIndex++; // Advance to the next step index

        if (currentStepIndex >= steps.length) {
            currentStepIndex = 0; // Loop back to the first step
        }

        const incomingStepElement = steps[currentStepIndex].element;

        // Ensure all other steps are hidden and clean up their animation classes
        steps.forEach((step, index) => {
            if (index !== currentStepIndex) {
                step.element.classList.add('hidden');
                step.element.classList.remove('animate-fade-in-up', 'animate-fade-out-up');
            }
        });

        // Animate in the incoming step
        incomingStepElement.classList.remove('hidden'); // Ensure it's visible to animate
        incomingStepElement.classList.add('animate-fade-in-up');
        incomingStepElement.addEventListener('animationend', function incomingHandler() {
            incomingStepElement.classList.remove('animate-fade-in-up');
            incomingStepElement.removeEventListener('animationend', incomingHandler); // Clean up
        }, { once: true });
    }

    function showNextStep() {
        // If there is an outgoing step, animate it out first
        if (currentStepIndex !== -1) {
            const outgoingStepElement = steps[currentStepIndex].element;

            outgoingStepElement.classList.add('animate-fade-out-up');
            outgoingStepElement.addEventListener('animationend', function outgoingHandler() {
                outgoingStepElement.classList.add('hidden'); // Hide after fade out
                outgoingStepElement.classList.remove('animate-fade-out-up');
                outgoingStepElement.removeEventListener('animationend', outgoingHandler); // Clean up

                // Once outgoing animation is done, proceed to show the incoming step
                advanceAndShowIncomingStep();
            }, { once: true });
        } else {
            // If it's the initial state, just show the first incoming step without fading anything out
            advanceAndShowIncomingStep();
        }
    }

    // Initial setup: Hide all steps, then trigger the first step display
    steps.forEach(step => {
        step.element.classList.add('hidden');
        step.element.classList.remove('animate-fade-in-up', 'animate-fade-out-up');
    });
    // currentStepIndex remains -1 at this point, so the first showNextStep will go into the 'else' block
    showNextStep();

    processStepsContainer.addEventListener('click', () => {
        showNextStep();
    });
});
