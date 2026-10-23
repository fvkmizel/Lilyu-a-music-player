// Peka AI - Front-End Theme Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('peka-theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.textContent = currentTheme === 'dark' ? '☀ Light' : '☾ Dark';
    themeToggle.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const next = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('peka-theme', next);
      themeToggle.textContent = next === 'dark' ? '☀ Light' : '☾ Dark';
    });
  }

  // Mobile navigation
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Load articles dynamically from CMS store or default fallback
  loadFeaturedPosts();
});

function getStoredPosts() {
  const local = localStorage.getItem('peka_cms_posts');
  if (local) {
    try {
      return JSON.parse(local);
    } catch(e) {}
  }
  return window.DEFAULT_PEKA_POSTS || [];
}

function loadFeaturedPosts() {
  const container = document.getElementById('featured-posts-grid');
  if (!container) return;

  const posts = getStoredPosts().filter(p => p.status !== 'draft');
  if (posts.length === 0) {
    container.innerHTML = '<p class="muted">Belum ada artikel yang dipublikasikan.</p>';
    return;
  }

  // Show top 6 posts
  const displayPosts = posts.slice(0, 6);
  container.innerHTML = displayPosts.map(post => `
    <article class="post-card">
      <a href="post.html?slug=${encodeURIComponent(post.slug)}">
        <img src="${post.image || 'https://blog.peka.ai.id/covers/launch.png'}" 
             alt="${post.title}" 
             class="post-thumb" 
             loading="lazy" 
             onerror="this.src='https://blog.peka.ai.id/covers/launch.png'">
      </a>
      <div class="post-body">
        <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
          <span class="badge">${post.categories && post.categories[0] ? post.categories[0] : 'Teknologi'}</span>
          <span class="mono muted">${post.date || 'Terbaru'}</span>
        </div>
        <h3 class="post-title">
          <a href="post.html?slug=${encodeURIComponent(post.slug)}">${post.title}</a>
        </h3>
        <p class="post-excerpt">${post.excerpt ? post.excerpt.substring(0, 110) + '...' : ''}</p>
        <div class="card-footer">
          <span class="muted">${post.reading_time || '3 menit baca'}</span>
          <a href="post.html?slug=${encodeURIComponent(post.slug)}" style="font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
            Baca ↗
          </a>
        </div>
      </div>
    </article>
  `).join('');
}
