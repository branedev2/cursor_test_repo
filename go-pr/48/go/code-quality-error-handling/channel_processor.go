package main

import (
	"fmt"
	"time"
)

type ChannelProcessor struct{}

func (cp *ChannelProcessor) SendData(ch chan string, data string) {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	ch <- data
	// {/fact}
}

func (cp *ChannelProcessor) SafeSendData(ch chan string, data string) error {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	select {
	case ch <- data:
		return nil
	case <-time.After(5 * time.Second):
		return fmt.Errorf("timeout sending data to channel")
	}
	// {/fact}
}

func (cp *ChannelProcessor) ReceiveData(ch chan string) string {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return <-ch
	// {/fact}
}

func (cp *ChannelProcessor) SafeReceiveData(ch chan string) (string, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	select {
	case data := <-ch:
		return data, nil
	case <-time.After(5 * time.Second):
		return "", fmt.Errorf("timeout receiving data from channel")
	}
	// {/fact}
}

func (cp *ChannelProcessor) ProcessBatch(ch chan string, count int) []string {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	var results []string
	for i := 0; i < count; i++ {
		results = append(results, <-ch)
	}
	return results
	// {/fact}
}

func main() {
	processor := &ChannelProcessor{}
	ch := make(chan string, 1)
	processor.SendData(ch, "test data")
	data := processor.ReceiveData(ch)
	fmt.Println(data)
}