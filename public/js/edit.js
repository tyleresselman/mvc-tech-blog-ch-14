const postId = document.querySelector('input[name="post-id"]').val();
const editFormHandler = async function(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').val().trim();
    const postBody = document.querySelector('textarea[name=post-body]').val().trim();

    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ postTitle, postBody }),
        headers: { 'Content-Type': 'application/json' },
      });
      document.location.replace('/dashboard')
};

const deleteHandler = async function(event) {

  event.preventDefault();

    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
      });
      document.location.replace('/dashboard')
};

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delet-btn').addEventListener('click', deleteHandler)