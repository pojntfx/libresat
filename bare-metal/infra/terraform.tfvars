matchbox_http_endpoint = "http://matchbox.example.com:8080"
matchbox_rpc_endpoint = "matchbox.example.com:8081"
ssh_authorized_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDGcChUFOw5EfMbMaVu4dt8MU6AE4SElgjpOhiX3Pi2j6cmZ7/SvJSR+iByP4lSEtSWZE255HuZTnbPVsHQTi9TAeuioN3IIEcHGabnpKFMgud9JL4pEDogTw8N534W8KAicTam0zuopPuUpG+4c5bHq/z17rZFNy912mz407ZO0qFTABoz66leGNHzfMh9QoYp/XxndKFGYQ/lCL4IlXtxICEwCAs8gAtfU6tC+5PkXMmTwbIsF3kUx+dnt4kxwlfXp7Z6ZRntL38jpkVV9ZIAfeF2rB19iTNs3UxZHRT3U+/erv2Uju61CwHBbfOn7WVGp3LBkl4wxu7hr/Zn6ssez++X97/mIG4wwS5KqXqyV6eCDMRwSVzFww0SBZnxUxnJ+YxM9Xdkhsp3OGXVrtSfvKCveXVICr8DZE6zKYRrpNqwo3iS2JxubQNdEuPvbeojPpqEXTUu6sVN6FzqLut9BWnDXy9WC6fAukcGr38DlTkxfXgPCTLIcbqufkbgxBaqO5kdBxNqAJsYQNp+b8J/mOKRtWwGiNMBkXw2LOqse3MO0j4ocJWDzwxDtiMSkj/oEv7s5RfskSqpqjbxzFR704jaz5cfKR+4cuSAWVfCoMxgHFhmxoGinyLMt8RCz5MdEWJ4ZbReEOGUKX2+69JzMNtv742CdQFHLaa9RhIYQQ== felix@pojtinger.com"

cluster_name = "example"
container_linux_version = "1576.4.0"
container_linux_channel = "stable"

# Machines
controller_names = ["node1"]
controller_macs = ["52:54:00:a1:9c:ae"]
controller_domains = ["node1.example.com"]
worker_names = ["node2", "node3"]
worker_macs = ["52:54:00:b2:2f:86", "52:54:00:c3:61:77"]
worker_domains = ["node2.example.com", "node3.example.com"]

# Bootkube
k8s_domain_name = "cluster.example.com"
asset_dir = "assets"

# Optional (defaults)
cached_install = "false"
# install_disk = "/dev/sda"
# container_linux_oem = ""
# networking = "flannel"
