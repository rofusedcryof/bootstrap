function switchLang(lang) {
    const langs = ['id', 'en', 'jp'];
    langs.forEach(code => {
      const el = document.getElementById(`lang-${code}`);
      if (code === lang) {
        el.classList.remove('d-none');
      } else {
        el.classList.add('d-none');
      }
    });
  }