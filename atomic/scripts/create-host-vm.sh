echo "Creating host VM"
virt-install --name host1 \
--description 'Host 1' \
--ram 2048 \
--vcpus 2 \
--disk path=../data/Fedora-AtomicHost-28-20180515.1.x86_64.qcow2 \
--os-type linux \
--os-variant fedora26 \
--network bridge=virbr0 \
--graphics vnc,listen=127.0.0.1,port=5901 \
--cdrom ../output/host.iso \
--noautoconsole