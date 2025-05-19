 // FAQ Accordion
 document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('active');
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        // Open current if wasn't open
        if (!isOpen) {
            answer.classList.add('active');
            question.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            question.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    });
});