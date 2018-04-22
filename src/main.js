import reveal from 'reveal.js';
import highlight from 'highlight.js';
import './js/chart/stars-history';
import './js/chart/benchmark';
import './js/chart/memory';

reveal.initialize({
  history: true,
  transition: 'slide',
});

highlight.initHighlightingOnLoad();
