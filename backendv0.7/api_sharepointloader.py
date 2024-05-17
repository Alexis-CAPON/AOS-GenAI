#ClientID : adf465c0-8843-4cce-81cf-dff60b9d2c1b
#SecretID : TDK8Q~yyBWAjQh1_F6qW3dX66kzECjDBwQiEXcMB

#Connect to sharepoint


# Auto reload document to vectorial database


# Download files from sharepoint and store them by batch in temporary folder


#When you have loaded X files add them to the database vectorial, embeded Add et for langchain use the record manager
#to avoid multiple indexings


from O365 import Account
import tempfile

scopes = ['https://graph.microsoft.com/.default']


credentials = ('adf465c0-8843-4cce-81cf-dff60b9d2c1b', 'TDK8Q~yyBWAjQh1_F6qW3dX66kzECjDBwQiEXcMB')

# the default protocol will be Microsoft Graph

account = Account(credentials, auth_flow_type='credentials', tenant_id='a62b600e-f8f3-4b75-888d-3dbbdb10962c')
if not account.is_authenticated:
    account.authenticate(scopes=scopes)

print('Authenticated!')

    
storage = account.storage()  # here we get the storage instance that handles all the storage options.

#TEAM 1 SHAREPOINT
my_site = storage.get_drive('b!BTt35M-Mj0WZtJcWAWjAysIJHQ6e74ZClRooFy92E1i8kMPE91AfRKf_1YxQua_1')

root_folder = my_site.get_root_folder()

def iterate_folder(folder):
    for item in folder.get_items():
        if item.is_folder:
            iterate_folder(item)  # Call the function recursively for subfolders
        else:
            print(item.name)
            #Download the file to a specific folder
            item.download('./temp/')

"""
with tempfile.TemporaryDirectory() as tmpdirname:
    #Go through all the files in the root folder
    print('created temporary directory', tmpdirname)
"""

iterate_folder(root_folder)


#At the same time the files are downloaded, they are loaded if they not already exist
