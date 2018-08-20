module "bare-metal-mercury" {
  source = "git::https://github.com/poseidon/typhoon//bare-metal/container-linux/kubernetes?ref=v1.10.3"

  providers = {
    local    = "local.default"
    null     = "null.default"
    template = "template.default"
    tls      = "tls.default"
  }

  # bare-metal
  cluster_name           = "mercury"
  matchbox_http_endpoint = "http://matchbox.example.com"
  os_channel             = "coreos-stable"
  os_version             = "1632.3.0"

  # configuration
  k8s_domain_name    = "node1.example.com"
  ssh_authorized_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDzFVy7SVr/A6evj5+97uQ/CP1nV9m6ggXkGkcHm/DFnhjVD+GqyF443RlpIlkaWPhTDeJIvaDxWzjMnMdRPIdd4w3TZNQFmIPSFTtf4eGLSzXucperxNdw4MjHuiXTp0hVlr9E6duJhcB209fuEgkI0tQKgFNRL6WSFHuvDot2siyX/ksn8SJqGdWKgJDWkthDdqTExTlhfEmjPMpoimbacWk3Exk1uaeYaZYAqJAfxl0C/T4c7FsjtOMJUcCtv5ER/ygmqGwyPrG6H9cgq/RYofER/pVhvswiMMWn63iaTlku7RO4LurBvAnS0DnsROlrrYwfDlt6yk2f5ER0DhgUarxAr4UBWD4+Lu8QX5UXIhzPzTb1a8apr6pSTXoAgOu1xF9X7RxWT1j/Bmp2mhBGxodqCIAnYof2vfc7G/NSypdpWKvV47PLk5ALOo8hcBNS5L289qiYMt83lLamTPy3qNWUpaNnQspZ2FiaRp1W2SDPZmYLPSg+pDE21TTlS9Vp24wmtIav6UZGtn6NvcB4wQ18PV2ksGH0FLdUx8yDVcpdeulHyOFIEINVxYNctVxTIbpmrIugUNtPaZo70Ak9FsS856e5n1Vhz80ZQ6BZQ2Vmrq5HYu7Yg4rIAQjJ6K7jHU5vt1jHw2DoLRi2S3eZyKjfZB2DTwgThwiXi/y4QQ== felix@pojtinger.com"
  asset_dir          = "/home/user/.secrets/clusters/mercury"

  # machines
  controller_names   = ["node1"]
  controller_macs    = ["52:54:00:a1:9c:ae"]
  controller_domains = ["node1.example.com"]

  worker_names = [
    "node2",
    "node3",
  ]

  worker_macs = [
    "52:54:00:b2:2f:86",
    "52:54:00:c3:61:77",
  ]

  worker_domains = [
    "node2.example.com",
    "node3.example.com",
  ]
}
