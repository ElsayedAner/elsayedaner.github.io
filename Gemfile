source "https://rubygems.org"

# This Gemfile is optimized for running Jekyll with GitHub Pages.
# Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This ensures that the correct versions of gems are used.

# The github-pages gem includes Jekyll along with a set of dependencies
# that are optimized and tested to work well on GitHub Pages.
gem "github-pages", group: :jekyll_plugins

# Faraday retry for robust HTTP requests, with a specified version to ensure compatibility.
gem 'faraday-retry', '~> 2.2'

# Windows-specific gem to improve performance of file watchers.
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Plugins for Jekyll, managed through the github-pages gem.
# If you need additional plugins, you can include them here.
group :jekyll_plugins do
  gem "jekyll-feed"    # Automatically generates an RSS feed.
  gem 'jekyll-sitemap' # Generates a sitemap for your site.
  gem 'hawkins', '~> 2.0.3' # For live-reloading in local development.
  gem "webrick", "~> 1.7"   # Required for Jekyll 4 and above to serve the site.
end

# Ensure all gems are compatible with each other by using Bundler's strict resolution features.
ruby '>= 2.4.0', '< 3.1.0' # Specify your Ruby version for compatibility with GitHub Pages.

# Uncomment the following line if you prefer to manage Jekyll's version directly.
# gem "jekyll", "~> 4.2.0"
