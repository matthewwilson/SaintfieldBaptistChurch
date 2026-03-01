import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import BibleVerse from '../../../components/utils/BibleVerse';

it('renders link with reference and text', () => {
  const html = renderToStaticMarkup(
    <BibleVerse reference="Matt1v1" text="Matthew 1:1" />
  );

  expect(html).toContain('href="https://www.bible.com/en-GB/bible/1/Matt1v1.KJV"');
  expect(html).toContain('>Matthew 1:1<');
});
