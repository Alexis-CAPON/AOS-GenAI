#Retrieve locals files entered by user, extract index information and send it in the index user space in ELK
#We also need maybe to do the same for teams and sharepoint files for security access if we can't use
#restriction access feature of elastic with teams and sharepoint

#Retrive locals users files
#How to do this ? One shot everytime a user put a file, autoupdate when user put a file will we sometimes check if
#we need to index new files ? Triger event in local front end that will send files to the back
