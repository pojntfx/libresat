# Cluster Bootstrap

## Prerequisites

### DNS

| Type  | Hostname | Value                |
| ----- | -------- | -------------------- |
| A     | stg1     | 206.189.226.226      |
| CNAME | \*.stg1  | stg1.libresat.space. |

### Node

| Propery    | Value           |
| ---------- | --------------- |
| Cores      | 1+              |
| RAM        | 2GB+            |
| Disk space | 10GB+           |
| IPv4       | 206.189.226.226 |

## Data

| Name               | Example         |
| ------------------ | --------------- |
| IPv4               | 206.189.226.226 |
| DigitalOcean Token | 23489d934r23    |
| Gandi Token        | 2d92342349d     |

## Workflow

```bash
# Update system
$ satctl update
$ satctl upgrade

# Create host
$ satctl create host -f host1.yaml
Host host1 created.
$ satctl get hosts
| NAME  | STATUS | IP              | CORES | RAM | DISK SPACE |
| ----- | ------ | --------------- | ----- | --- | ---------- |
| host1 | Ready  | 206.189.226.226 | 1     | 2GB | 20GB       |

# Create cloud and add host
$ satctl create cloud -f cloud1.yaml
Cloud cloud1 created.
$ satctl get clouds
| NAME   | STATUS | DOMAIN              | HOSTS |
| ------ | ------ | ------------------- | ----- |
| cloud1 | Ready  | stg1.libresat.space | 1     |

# Create user
$ satctl create user -f user1.yaml
User user1 created.
$ satctl -c cloud1 get users
| NAME  | STATUS | EMAIL             | PUBLIC KEY                                |
| ----- | ------ | ----------------- | ----------------------------------------- |
| user1 | Ready  | user1@example.com | ssh-rsa AAA3Dx(...)== felicitas@pojtinger.com |

# Connect to cloud
$ satctl connect user1@user1.example.com:privatekey@stg1.libresat.space
$ satctl -c cloud1 get hosts
| NAME  | STATUS | IP              | CORES | RAM | DISK SPACE |
| ----- | ------ | --------------- | ----- | --- | ---------- |
| host1 | Ready  | 206.189.226.226 | 1     | 2GB | 20GB       |

# Create cluster
$ satctl create cluster -f cluster1.yaml
Cluster cluster1 created.
$ satctl -c cloud1 get clusters
| NAME     | STATUS | DOMAIN                       | HOSTS |
| -------- | ------ | ---------------------------- | ----- |
| cluster1 | Ready  | cluster1.stg1.libresat.space | 1     |

# Connect to cluster
$ satctl connect user1@user1.example.com:privatekey@cluster1.stg1.libresat.space # Uses default ClusterRoleBinding
$ kubectl get nodes
NAME              STATUS    ROLES     AGE       VERSION
libresat-node-1   Ready     master    16d       v1.11.2
```
