---
title: git
abbrlink: 518e617c
cover: /img/bgg.jpg
date: 2022-04-01 15:57:22
tags:
    - [git]
categories:
    - [git]
---

## git使用

### git配置

1、配置用户名：` git config --global user.name "Yong"`

2、设置联系邮箱：`git config --global user.email "2609014220@qq.com"`

3、查看用户配置是否完成：`git config --global --list` 或者(简写)`git config --global -l`

4、更换日志编辑器：` git config --global core.editor "notepad"`

帮助文档使用比如log不明白` git help log`	
<!-- more -->

### git 使用

1、初始化仓库（进入要初始化仓库的文件位置）：` git init gitdemo1`(仓库名字demo1)然后进入通过命令进入仓库

2、查看仓库状态：` git status`

3、添加追踪文件：` git add 文件名`多文件添加：`git add .`代表当前文件夹所有的文件添加到暂存区

4、再次查看仓库状态文件是否被追踪：` git status`

5、把追踪的文件提交：`git commit`完成日志填写

日志可以直接写在命令里面` git commit --message "我就是打开看看"`

已经提交到暂存区的文件再次修改后不用分两步写直接写成：`git commit -a -m "我就是打开看看2"`(-a  -m是all message缩写  )

取消跟踪的文件：`git restore --staged 文件名`

从仓库中删除文件不让他跟踪：`git rm --cached 文件名`不会删除文件本身

手动删除文件git没有记录，想要有git记录必须再次追踪文件，再次提交到仓库更新删除日志

在git命令行中删除文件有记录们，可以直接查看需要我们提交

查看日志；`git log`    查看间接日志`$ git log --pretty=oneline`  查看最近几次日志`git log --patch -2`

查看最近一次日志详情` git show` 或者某次的` git show 哈希值/标签`

恢复操作git reset --hard 02266aad15e6d82eaf32da0cf37c860a2f8f6ff4想要恢复的日志标识哈希值

创建文件夹  `mkdir 文件夹名称` 移动文件`git mv style.css css/style.css`重命名`git mv about.html  1.html`

### git分支

`git branch`查看分支所在分支前有一个五角星（字体为绿色）

` git branch light-chat `创建分支

`git checkout light-chat`切换分支

` git branch --delete 分支名称`删除分支

`git merge light-chat`合并分支

### git远程仓库

首先我们需要一个远程仓库比如github，gitee仓库我们创建一个仓库得到一个远程仓库地址

使用`git push https://gitee.com/ysling11226/dome1.git`

可以个远程地址命名`  git remote add aaa https://gitee.com/ysling11226/dome1.git`再提交到远程仓库` git push origin`

`git push origin master`提交到origin地址的master分支上，origin与master可以不写默认就是这两个参数

重命名远程地址`git remote rename aaa origin`

#### 克隆下载远程仓库

1.直接使用下载打包的zip文件

2.使用代码`git clone 地址`

使用` git clone git@gitee.com:ysling11226/dome2.git`克隆下载（这个是使用ssh）

使用时报错服务器不信任你需要你生成一个公钥添加到gitee的公钥管理中

使用git命令生成公钥`ssh-keygen -t rsa -C "2609014220@qq.com"（引号内是gitee绑定的邮箱）`然后在克隆

#### 在远程服务器上创建新的文件同步到本地

##### 第一种分两步

克隆下来`git fetch origin`

融合到本地仓库` git merge`

##### 第二种

直接克隆到本地仓库` git pull`

### 怎样通过命令创建一个本地仓库?

` git init Yong`创建一个名字为Yong的仓库

### 如何对仓库中的内容进行增删改?

添加追踪文件：` git add 文件名`

把追踪的文件提交：`git commit`

从仓库中删除文件不让他跟踪：`git rm --cached 文件名`

移动文件`git mv 文件名 移动到的路径/文件名`重命名`git mv 文件名  新的文件名`

### 怎样克隆一个远程仓库?

1.直接使用下载打包的zip文件

2.使用代码`git clone 地址`

### 怎样从远程仓库中拉去数据，以及怎样向远程仓库推送数据?

拉取数据` git pull`

推送数据`git push`

`git tag v0.0.0`给上次提交的信息打上一个标记比如版本号v0.0.0 也可以给某次打上标签，在后面加上要打标签的某次的哈希值

`git tag`查看所有标签

` git push origin --tags`把标签提交到远程仓库中origin可以省略`git push origin 标签`提交单个标签

` git tag --delete v0.9.0`删除本地仓库的标签

` git push origin :refs/tags/v0.9.0`删除远程仓库的标签

### 怎样将本地仓库中的所有标签推送到远程仓库?

` git push origin --tags`把标签提交到远程仓库中

### 如何使用GitHub托管仓库中的静态资源?

新建一个仓库把代码放进去，然后打开仓库设置找到page选项打开设置选择分支和目录保存，上面会给一个网址打开网址，该网址就是托管的已经渲染的资源

## 新建代码库

```
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```

## 配置

Git 的设置文件为 `.gitconfig`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

```
# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

## 增加/删除文件

```
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

## 代码提交

```
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

## 分支

```
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

## 标签

```
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

## 查看信息

```
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

## 远程同步

```
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

## 撤销

```
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```



## git同时提交到gitee和github

.git文件夹下config

按照顺序依次提交到两个地址直接push

```
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
[remote "origin"]
        url = git@gitee.com:yslin1126/blog.git
        url = git@github.com:yoloimissu/Blog.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
        remote = origin
        merge = refs/heads/master
```



