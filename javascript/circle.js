document.addEventListener('DOMContentLoaded', () => {
    const submitBTN = document.getElementById('submit-btn');
    const card1 =document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
  

    submitBTN.addEventListener('click',() =>{
        card1.classList.toggle("hidden");
        card2.style.display = 'block';
    });
    const ratingCircles = document.querySelectorAll('.rating-circle');
    const selectedRating = document.getElementById('selectedRating');

    ratingCircles.forEach(circle =>{
      circle.addEventListener('click', () => {
        ratingCircles.forEach( circle => {
          circle.classList.remove('selected');
        });
        circle.classList.add('selected');

        const selectedvalue = circle.getAttribute('data-rating');
        selectedRating.innerHTML = selectedvalue;
    });
      });
    });
  

    
   