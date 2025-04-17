module.exports = function (eleventyConfig) {
  // Explicitly copy assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/css');

  return {
    dir: {
      input: 'src/pages',
      output: '_site',
      includes: '../_includes',
      data: '../_data',
    },
    templateFormats: ['njk', 'md', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
