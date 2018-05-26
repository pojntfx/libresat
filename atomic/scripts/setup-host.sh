echo "Installing Ansible if not already installed ..."
sudo apt install ansible

echo "Adding localhost to ansible hosts ..."
echo localhost >> /etc/ansible/host

echo "Copying own ssh key to authorized_keys ..."
sudo cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

echo "Testing ansible connection ..."
ansible all -m ping
