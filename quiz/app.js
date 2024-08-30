const body=document.querySelector('body');
        const totalQuestions = 5;
        function nextQuestion(currentQuestion, gender) {
            document.getElementById('question-' + currentQuestion).style.display = 'none';
            var nextQuestion = currentQuestion + 1;

            if (gender) {
                if (gender === 'male') {
                    document.getElementById('male-options').style.display = 'flex';
                    document.getElementById('female-options').style.display = 'none';
                } else if (gender === 'female') {
                    document.getElementById('female-options').style.display = 'flex';
                    document.getElementById('male-options').style.display = 'none';
                }
            }

            if (document.getElementById('question-' + nextQuestion)) {
                document.getElementById('question-' + nextQuestion).style.display = 'block';
            } else {
                document.getElementById('submit-button').style.display = 'block';
            }

            if (nextQuestion <= 5) {
                updateProgressBar(nextQuestion);
            }

            // Show the previous button if not on the first question
            if (currentQuestion >=1) {
                document.getElementById('prev-button').style.display = 'inline-block';
            }
        }

        function prevQuestion() {
            let currentQuestion = document.querySelector('.question:not([style*="display: none"])').id.split('-')[1];
            currentQuestion = parseInt(currentQuestion);

            if (currentQuestion > 1) {
                document.getElementById('question-' + currentQuestion).style.display = 'none';
                let prevQuestion = currentQuestion - 1;
                document.getElementById('question-' + prevQuestion).style.display = 'block';

                updateProgressBar(prevQuestion);

                // Hide the previous button if back to the first question
                if (prevQuestion === 1) {
                    document.getElementById('prev-button').style.display = 'none';
                }

                // Hide the submit button if not on the last question
                document.getElementById('submit-button').style.display = 'none';
            }
        }

        function updateProgressBar(questionNumber) {
            const progressBar = document.getElementById('progress-bar');
            const progressPercentage = (questionNumber / totalQuestions) * 100;
            progressBar.style.width = progressPercentage + '%';
        }