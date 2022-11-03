const newCommentHandler = async function(event) {
    event.preventDefault();

    const postId = document.querySelector('input[name="post-id"]').value

    const commentBody = document.querySelector('textarea[name=comment-body]').value;

    await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ postId, commentBody }),
        headers: { 'Content-Type': 'application/json' },
      });
      document.location.reload();
}

document.querySelector('#new-comment-form').addEventListener('submit', newCommentHandler)