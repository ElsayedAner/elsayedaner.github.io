---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

<style>
ul.tree, ul.tree ul {
  list-style-type: none;
  font-family: 'Courier New', monospace;
  padding-left: 0;
}

ul.tree li {
  margin: 0.5em 0;
  padding-left: 2em; /* Adjusted for alignment */
  position: relative;
}

ul.tree li:before {
  content: '';
  border-left: 1px solid gray;
  position: absolute;
  left: 0.5em; /* Line position */
  top: -0.5em; /* Adjust top position for alignment */
  bottom: 0.5em; /* Adjust bottom position for alignment */
  height: 1em;
}

ul.tree li:after {
  content: '';
  position: absolute;
  top: 0.8em; /* Horizontal line position */
  left: 0.5em;
  width: 1em; /* Line width */
  border-top: 1px solid gray;
}

/* Style for the last item */
ul.tree li:last-child:before {
  height: auto;
  top: 0.8em; /* Start from the middle of the bullet/emoji */
  bottom: 0;
}

/* Hide the horizontal line for last item */
ul.tree li:last-child:after {
  content: none;
}

/* Style for the first child to remove top part of the line */
ul.tree > li:first-child:before {
  top: 0.8em; /* Start from the middle of the bullet/emoji */
}

/* Horizontal line should not appear on items without children */
ul.tree li:not(:last-child):after {
  border-top: 1px solid gray;
}
</style>

{% include base_path %}

This page displays the hierarchical structure of the main pages and their subpages as defined in the navigation settings.

{% include recursive_navigation_limited.html items=site.data.navigation.main depth=0 %} 
