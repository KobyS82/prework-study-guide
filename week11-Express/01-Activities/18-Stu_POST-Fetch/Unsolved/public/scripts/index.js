const userNameInput = document.getElementById('username');
const productInput = document.getElementById('product');
const reviewInput = document.getElementById('review');
const reviewForm = document.getElementById('review-form');

// TODO: Add a comment explaining the functionality of this helper function
// Takes in Review obj and sends a post
const postReview = (review) =>
  // TODO: Add a comment explaining what sort of data we need to provide when invoking the fetch function for a POST request
  // Grabs all reviews and shows any bodies or headers tied to it
  fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // TODO: Add a comment describing why one would need to convert the JSON object to a string in this instance
    // So we can see it and work with it
    body: JSON.stringify(review),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    // TODO: Add a comment describing the functionality of the catch statement
    // If theres an error then it will display an error report to the consol
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// Listen for when the form is submitted
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Call our `postReview` method to make a POST request with our `newReview` object.
  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
