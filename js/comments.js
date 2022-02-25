// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।

// completed to 5 number once
const loadCommentsData = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
  fetch(url)
    .then(response => response.json())
    .then(data => displayComments(data));
};

loadCommentsData();

const displayComments = comments => {
    const commentsContainer = document.getElementById('container');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
            <h5>${comment.name}</h5>
            <P>${comment.body}</P>
        `;
        commentsContainer.appendChild(div);
        div.addEventListener('click', function() {
            const url = `https://jsonplaceholder.typicode.com/comments/${comment.id}`;
            fetch(url)
            .then(res => res.json())
            .then(data => onclickComment(data))
            const div = document.createElement('div');
            div.innerHTML = '';
        })
    });
}

const onclickComment = comment => {
    const clickComment = document.getElementById('comment-onclick');
    const div = document.createElement('div');
    clickComment.textContent = '';
    div.classList.add('comment-click');
    div.innerHTML = `
        <h3>${comment.postId}</h3>
        <h3>${comment.id}</h3>
        <h5>${comment.name}</h5>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
    `;
    clickComment.appendChild(div);
}