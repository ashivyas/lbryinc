#!/bin/bash
set -x
set -euvo pipefail
IFS=$'\n\t'

#clone mirror Rocket.Chat
git clone --mirror https://github.com/lbryio/lbryinc.git

#move to directory
cd lbryinc.git/

#push release-0.29.1 to source_branch
git push ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/lbryinc 2334ad53e82c22d6291899785d5292347008f2a9:source_branch

cd ../

#remove directory
rm -rf lbryinc.git/