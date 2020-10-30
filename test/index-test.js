const assert = require('assert');
const denali = require('../index.js');
const fs = require('fs');

describe('index', function() {
  describe('getFilePath', function() {
    it('should return a file path', function() {
      assert.match(denali.getFilePath(), /\/denali-icon-font$/);
      assert.match(denali.getFilePath(''), /\/denali-icon-font$/);
      assert.match(denali.getFilePath('./'), /\/denali-icon-font$/);
      assert.match(denali.getFilePath('dist/'), /\/denali-icon-font\/dist$/);
      assert.match(denali.getFilePath('dist/denali-icon-font.css'), /denali-icon-font\/dist\/denali-icon-font.css$/);
      assert.match(denali.getFilePath('build/svg/uEA02-5g.svg'), /denali-icon-font\/build\/svg\/uEA02-5g.svg$/);

      const path = denali.getFilePath('build/svg/uEA02-5g.svg');
      assert.match(fs.readFileSync(path, 'utf8'), /<title>5g<\/title>/);
    });
  });
});
