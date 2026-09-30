# Github Actions
>  GitHub-hosted Actions runners runners are always completely new temporary machine 

1. jobs are parallel bydefualt , runs on different machines
2. can jobs sequentially
3. 

## env
> Setup environment, 
1. env variables can be passed globally, or specific to per job or specific to per step
2. Github acitons provides some `pre-defined context/data` , `builtin funcitons/method` for perfrom some operations
3. can set if condition
4. each run: step gets its own shell.
```txt
A new shell starts.

Its current directory goes back to the default:
```
5. trigger workflow on any events, plus we can add the explicitly trigger option