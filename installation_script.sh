#!/bin/bash

submodule_url="git@github.com:daniel-tertius/the-tradesmith-schema.git"

cd "$(git rev-parse --show-toplevel)"
mkdir -p "src/functions"

# Check if the submodule directory exists before removing it
if [ -d "functions/schema" ]; then
    git submodule deinit -f functions/schema
    git rm --cached functions/schema
    rm -rf "functions/schema"
    echo "Existing submodule removed."
fi

# Add the submodule
if git submodule add --force "$submodule_url" "functions/schema"; then
    echo "Submodule 'the-tradesmith-schema' added successfully!"
else
    echo "Failed to add submodule. Check the submodule URL and try again."
    exit 1
fi

# Navigate into the submodule directory
cd "functions/schema" || {
    echo "Failed to navigate to submodule directory."
    exit 1
}

# Initialize and update the submodule
git submodule update --init --recursive --remote >/dev/null || {
    echo "Failed to update submodule. Check submodule configuration and try again."
    exit 1
}

# Pull the most recent changes from the submodule
git pull origin master >/dev/null || {
    echo "Failed to pull changes from submodule. Check submodule configuration and try again."
    exit 1
}

# Return to the root directory of your repository
cd "-" >/dev/null || {
    echo "Failed to return to repository root directory."
    exit 1
}

echo "Submodule 'the-tradesmith-schema' updated and added to package.json successfully!";
exit 0