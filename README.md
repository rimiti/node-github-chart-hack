# node-github-chart-hack
GithubChartHack is a quick hack for customize your github chart activity. It simulate 0-10 commit(s) every day and uses the `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE` environment variables to make commits in the past. 

### How to Use
Place `index.js` in your Git repository. Make sure your [remote repository URL is set](https://help.github.com/articles/adding-a-remote/), and that you have a [public SSH key set up](https://help.github.com/articles/generating-ssh-keys/). Then run the script with node, with an integer specifying `n` number of days before today to generate commits for. E.g.,

	node index.js <n>

It might take a while to generate all the commits. If githubChatHack stops before it finishes, you can resume where you last left off by specifying a date before today when you want it to resume, like so:

	node index.js <n> <date>

`n` is the remaining days you want to generate commits for, and `date` is a date string in the form `yyyy-mm-dd`  (e.g., 2013-04-05).

#### An Example

The following calendar is the result of running `node index.js 365`:

<img src="https://github.com/dimsolution/githubcharthack/blob/master/example.png" alt="example image"/>

The run took a total of eight hours. Beautiful, isn't it?

Enjoy your decorated calendar!

### License
GithubChartHack is distributed under the GNU General Public License v3.0 (GPLv3).
