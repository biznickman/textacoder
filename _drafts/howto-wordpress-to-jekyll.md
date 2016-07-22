---
layout: post
title:  "How To Convert A Wordpress Site Over To Jekyll"
author: "Nick O'Neill"
date:   2016-07-06 05:33:25 -0700
categories: howto wordpress
excerpt: "Stop paying for Wordpress hosting! Step by step guide to transfer from Wordpress to Jekyll."
---
Step 1: Create the following Gemfile

    ```
    source 'https://rubygems.org'
    ruby '2.3.0'

    gem 'jekyll-import'
    gem 'unidecode'
    gem 'htmlentities'
    gem 'mysql2'
    gem 'sequel'
    ```

Create the following ruby file:

    ```
    require "jekyll-import"

    JekyllImport::Importers::WordPress.run({
      "dbname" => "[DB NAME HERE]",
      "user" => "[DB USER HERE]",
      "password" => "[DB PASS HERE]",
      "host" => "localhost",
      "extension" => "html",
      "status" => ["publish"]
    })
    ```

Download all the files and folders that were generated. Take the `_posts` folder and move over all the HTML files in it to the Jekyll site.

Next create a ruby script in your `_posts` folder with the following code:

    ```
    require 'reverse_markdown'

    Dir.glob("*.html").each do |html_file|
      before = File.open(html_file, "rb").read
      if before =~ /\A(---\s*\n.*?\n?)^(---\s*$\n?)/m
          front = $1
          content = ReverseMarkdown.convert $'
          after = "#{front}---\n#{content}"

          new_file = File.new(html_file.sub('.html','.md'), "w")
          new_file.puts after
          new_file.close
      end
    end
    ```

Find and replace all occurences of `&nbsp;`


Checklist before launch:
- Is the RSS feed being linked to properly
- Have you set up the proper sitemap.xml file for Google Webmaster Tools?
- Have you cleaned up the front-matter?
- Have you cleaned up the individual posts?
