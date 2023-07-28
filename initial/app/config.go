package config

import (
	"io/ioutil"
	"log"

	"gopkg.in/yaml.v2"
)

type Config struct {
	Port   string `yaml:"port"`
	IpStat string `yaml:"ipStat"`
}

func CreateConfig() *Config {
	config := New()
	yamlfile, err := ioutil.ReadFile("./configs/config.yml")
	if err != nil {
		log.Fatal(err)
	}
	err = yaml.Unmarshal(yamlfile, config)
	if err != nil {
		log.Fatal(err)
	}
	return config
}

func New() *Config {
	return &Config{}
}
