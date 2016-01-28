$manifest = <<PUPPET

	Exec {
	    path => ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin', '/usr/local/sbin']
	}

	exec { 'apt-get update':
	    command => 'apt-get -qq -y update --fix-missing',
	    unless  => 'grep -F `date +"%y-%m-%d"` /var/log/apt/history.log'
	}

	exec { 'locale':
	    command => 'locale-gen en_GB.UTF-8',
	    unless  => 'validlocale en_GB.UTF-8'
	}

	exec { 'login-directory':
	    command => 'echo "if [ -d /vagrant ]; then cd /vagrant; fi" >> /home/vagrant/.bashrc',
	    unless  => 'grep -F "if [ -d /vagrant ]; then cd /vagrant; fi" /home/vagrant/.bashrc'
	}

	package { 'build-essential':
	    ensure  => present,
	    name    => 'build-essential',
	    require => Exec['apt-get update']
	}

	package { 'git':
	    ensure  => present,
	    name    => 'git',
	    require => Exec['apt-get update']
	}

	package { 'ruby-dev':
	    ensure  => present,
	    name    => 'ruby-dev',
	    require => Package['build-essential']
	}

	package { 'ruby':
	    ensure  => present,
	    name    => 'ruby1.9.3',
	    require => [Exec['locale'], Package['ruby-dev']]
	}

	package { 'bundler':
	    ensure  => present,
	    name    => 'bundler',
	    require => Package['ruby']
	}

	exec { 'bundle install':
	    command => 'su vagrant -c "bundle install"',
	    unless => "bundle check",
	    cwd => '/vagrant',
	    require => Package['bundler']
	}

	package { 'node':
	    ensure  => present,
	    name    => 'nodejs',
	    require => Exec['apt-get update']
	}

	file { '/usr/bin/node':
	   ensure => 'link',
	   target => '/usr/bin/nodejs',
	   require => Package['node']
	}

	package { 'npm':
	    ensure  => present,
	    name    => 'npm',
	    require => [Package['git'], Package['node']]
	}

	exec { 'npm install':
	    command => 'su vagrant -c "npm install"',
	    cwd => '/vagrant',
	    require => Package['npm']
	}

	exec { 'install grunt':
	    command => 'su vagrant -c "npm install grunt-cli"',
	    cwd => '/vagrant',
	    creates => '/vagrant/node_modules/.bin/grunt',
	    require => Exec['npm install']
	}

	file { '/usr/bin/grunt':
	   ensure => 'link',
	   target => '/vagrant/node_modules/.bin/grunt',
	   require => Exec['install grunt']
	}

	exec { 'install bower':
	    command => 'su vagrant -c "npm install bower"',
	    cwd => '/vagrant',
	    creates => '/vagrant/node_modules/.bin/bower',
	    require => Exec['npm install']
	}

	file { '/usr/bin/bower':
	   ensure => 'link',
	   target => '/vagrant/node_modules/.bin/bower',
	   require => Exec['install bower']
	}

	exec { 'bower install':
	    command => 'su vagrant -c "bower install --config.interactive=false"',
	    cwd => '/vagrant',
	    require => File['/usr/bin/bower']
	}

PUPPET

def inline_puppet(manifest)
	require 'base64'
	"TMPFILE=$(mktemp); echo '#{Base64.strict_encode64(manifest)}' | base64 --decode > $TMPFILE; puppet apply -v $TMPFILE"
end

Vagrant.configure("2") do |config|

	config.vm.box = "ubuntu/trusty64"
	config.vm.hostname = "vagrant.local"

	config.vm.network "private_network", type: "dhcp"
	config.vm.synced_folder ".", "/vagrant", type: "nfs", mount_options: ["actimeo=1"]

	config.vm.network :forwarded_port, guest: 9000, host: 9000, auto_correct: false
	config.vm.network :forwarded_port, guest: 35729, host: 35729, auto_correct: false

	config.vm.provider :virtualbox do |virtualbox|
		virtualbox.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
		virtualbox.customize ["modifyvm", :id, "--ioapic", "on"]
		virtualbox.customize ["modifyvm", :id, "--cpus"  , "2"]
		virtualbox.customize ["modifyvm", :id, "--memory", "2048"]
		virtualbox.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
		virtualbox.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
	end

	config.vm.provision :shell, :inline => inline_puppet($manifest)

end
