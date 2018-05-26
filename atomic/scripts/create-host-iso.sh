echo "Creating host iso ..."
genisoimage -o ../output/host.iso -volid cidata -joliet -rock -input-charset utf-8 ../data/meta-data ../data/user-data