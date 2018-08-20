module "digital-ocean-cluster" {
  source = "git::https://github.com/poseidon/typhoon//digital-ocean/container-linux/kubernetes?ref=v1.10.3"

  providers = {
    digitalocean = "digitalocean.default"
    local = "local.default"
    null = "null.default"
    template = "template.default"
    tls = "tls.default"
  }

  # Digital Ocean
  cluster_name = "yourclustername"
  region       = "nyc3"
  dns_zone     = "yourdnszone"

  # configuration
  ssh_fingerprints = ["yourfingerprint"]
  asset_dir        = "/home/yourusername/.secrets/clusters/yourclustername"

  # optional
  worker_count = 2
  worker_type  = "s-1vcpu-1gb"
}