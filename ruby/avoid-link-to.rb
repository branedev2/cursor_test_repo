# {fact rule=autoescape-disabled@v1.0 defects=1}
# ruleid: avoid-link-to
link_to "#{params[:url]}/profile", profile_path(@profile)
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
# ruleid: avoid-link-to
link_to "#{h(cookies[:url])}/profile", profile_path(@profile)
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
url = request.env[:url]
# ruleid: avoid-link-to
link_to url, profile_path(@profile)
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
# ruleid: avoid-link-to
link_to "#{h(User.url(x))}/profile", profile_path(@profile)
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
# ok: avoid-link-to
link_to "Profile#{params[:url]}", profile_path(@profile)
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
# ok: avoid-link-to
link_to "Profile", profile_path(@profile)
# {/fact}
