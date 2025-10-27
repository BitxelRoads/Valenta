document.addEventListener('DOMContentLoaded', () => {
    const processStepsContainer = document.getElementById('process-steps-container');
    const step1 = document.getElementById('process-step-1');
    const step2 = document.getElementById('process-step-2');
    const step3 = document.getElementById('process-step-3');

    let currentStepIndex = -1;

    const steps = [
        { element: step1, image: step1.querySelector('img') },
        { element: step2, image: step2.querySelector('img') },
        { element: step3, image: step3.querySelector('img') }
    ];

    function advanceAndShowIncomingStep() {
        currentStepIndex++;

        if (currentStepIndex >= steps.length) {
            currentStepIndex = 0;
        }

        const incomingStepElement = steps[currentStepIndex].element;

        steps.forEach((step, index) => {
            if (index !== currentStepIndex) {
                step.element.classList.add('hidden');
                step.element.classList.remove('animate-fade-in-up', 'animate-fade-out-up');
            }
        });

        incomingStepElement.classList.remove('hidden');
        incomingStepElement.classList.add('animate-fade-in-up');
        incomingStepElement.addEventListener('animationend', function incomingHandler() {
            incomingStepElement.classList.remove('animate-fade-in-up');
            incomingStepElement.removeEventListener('animationend', incomingHandler);
        }, { once: true });
    }

    function showNextStep() {
        if (currentStepIndex !== -1) {
            const outgoingStepElement = steps[currentStepIndex].element;

            outgoingStepElement.classList.add('animate-fade-out-up');
            outgoingStepElement.addEventListener('animationend', function outgoingHandler() {
                outgoingStepElement.classList.add('hidden');
                outgoingStepElement.classList.remove('animate-fade-out-up');
                outgoingStepElement.removeEventListener('animationend', outgoingHandler);

                advanceAndShowIncomingStep();
            }, { once: true });
        } else {
            advanceAndShowIncomingStep();
        }
    }

    steps.forEach(step => {
        step.element.classList.add('hidden');
        step.element.classList.remove('animate-fade-in-up', 'animate-fade-out-up');
    });
    showNextStep();

    processStepsContainer.addEventListener('click', () => {
        showNextStep();
    });
});
