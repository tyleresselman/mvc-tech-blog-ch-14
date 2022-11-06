const newFormHandler = async function(event) {
   
  event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').val().trim();
    const postBody = document.querySelector('textarea[name=post-body]').val().trim();

    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postBody }),
        headers: { 'Content-Type': 'application/json' },
      });
      document.location.replace('/dashboard')
}

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler)