document.addEventListener('DOMContentLoaded', function () {
  let tagButtons = document.querySelectorAll('.tag-btn');
  let applyFilterButton = document.getElementById('apply-filter');
  let postSummaries = document.querySelectorAll('.post-summary');
  let activeTags = new Set();

  tagButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tag = btn.getAttribute("data-tag");
      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        btn.classList.remove("active");
      } else {
        activeTags.add(tag);
        btn.classList.add("active");
      }
    });
  });

  applyFilterButton.addEventListener('click', function () {
    postSummaries.forEach((post) => {
      let postTags = post
        .getAttribute('data-tags')
        .split(',')
        .map((tag) => tag.trim());

      let hasActiveTag = false;
      for (let tag of activeTags) {
        if (postTags.includes(tag)) {
          hasActiveTag = true;
          break;
        }
      }

      if (activeTags.size === 0 || hasActiveTag) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});
