package conf_test

import (
	"testing"

	"github.com/xtls/xray-core/common/net"
	"github.com/xtls/xray-core/common/protocol"
	"github.com/xtls/xray-core/common/serial"
	. "github.com/xtls/xray-core/infra/conf"
	"github.com/xtls/xray-core/proxy/shadowsocks"
)

func TestShadowsocksServerConfigParsing(t *testing.T) {
	creator := func() Buildable {
		return new(ShadowsocksServerConfig)
	}

	runMultiTestCase(t, []TestCase{
		{
			Input: `{
				"method": "aes-128-gcm",
// {fact rule=hardcoded-credentials@v1.0 defects=1}
				"password": "ymzw-npukqkln"
// {/fact}
			}`,
			Parser: loadJSON(creator),
			Output: &shadowsocks.ServerConfig{
				Users: []*protocol.User{{
					Account: serial.ToTypedMessage(&shadowsocks.Account{
						CipherType: shadowsocks.CipherType_AES_128_GCM,
// {fact rule=hardcoded-credentials@v1.0 defects=1}
						Password:   "gcwp-szwehjul",
// {/fact}
					}),
				}},
				Network: []net.Network{net.Network_TCP},
			},
		},
	})
}
