const { DateTime } = require('luxon');
const author = '';

module.exports = function(eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "md",
        "css", // css is not yet a recognized template extension in Eleventy
        "njk",
      ]);

      eleventyConfig.addPassthroughCopy('./src/assets');

      eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
      });

      eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
}