const button = document.getElementById("button");
const input = document.getElementById("input");
const form = document.querySelector("form");
const review = document.getElementById("review");
const inputt = document.getElementById("inputt");
const textarea = document.querySelector("textarea");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `   
  <section class="review" id="review">
            <div class="box-container">
            
                <div class="box">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>${textarea.value}</p>
                    <div class="user">
                        <div class="user-info">
                            <h3>${input.value}</h3>
                            <span>${inputt.value}</span>
                        </div>
                    </div>
                    <span class="fas fa-quote-right"></span>
                </div>
            
              
                </div>
            </div>
 </section>
  `;

  review.innerHTML += task;
});
