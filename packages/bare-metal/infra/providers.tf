provider "matchbox" {
  endpoint    = "matchbox.example.com:8081"
  client_cert = "${file("~/.config/matchbox/client.crt")}"
  client_key  = "${file("~/.config/matchbox/client.key")}"
  ca          = "${file("~/.config/matchbox/ca.crt")}"
}

provider "local" {
  version = "~> 1.0"
  alias = "default"
}

provider "null" {
  version = "~> 1.0"
  alias = "default"
}

provider "template" {
  version = "~> 1.0"
  alias = "default"
}

provider "tls" {
  version = "~> 1.0"
  alias = "default"
}