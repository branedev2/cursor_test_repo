#include <iostream>
#include <thread>
#include <vector>
#include <mutex>
#include <stdexcept>

class ThreadManager {
private:
    std::vector<std::thread> threads;
    std::mutex mtx;
    
public:
    void startWorker(int workerId) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        threads.emplace_back([workerId]() {
            std::cout << "Worker " << workerId << " started" << std::endl;
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
        });
        // {/fact}
    }
    
    void safeStartWorker(int workerId) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        try {
            std::lock_guard<std::mutex> lock(mtx);
            threads.emplace_back([workerId]() {
                try {
                    std::cout << "Worker " << workerId << " started" << std::endl;
                    std::this_thread::sleep_for(std::chrono::milliseconds(100));
                } catch (const std::exception& e) {
                    std::cerr << "Worker " << workerId << " error: " << e.what() << std::endl;
                }
            });
        } catch (const std::system_error& e) {
            throw std::runtime_error("Failed to create thread: " + std::string(e.what()));
        }
        // {/fact}
    }
    
    ~ThreadManager() {
        for (auto& t : threads) {
            if (t.joinable()) {
                t.join();
            }
        }
    }
};

int main() {
    ThreadManager manager;
    manager.startWorker(1);
    manager.safeStartWorker(2);
    return 0;
}