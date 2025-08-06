class cap_t {

};

class cap_value_t{

};

cap_t cap_init() {
    
}

void cap_set_flag(cap_t caps, cap_value_t permitted, int num, cap_value_t caplist[], cap_value_t num2) {

}

void cap_set_file(char* a, cap_t cap) {

}

void cap_set_fd(int fd, cap_t cap) {
    
}

void cap_set_proc(cap_t cap) {

}

void capsetp(int pid, cap_t cap) {

}

void capset(int num, cap_t cap) {

}

cap_value_t CAP_FOWNER;
cap_value_t CAP_CHOWN;
cap_value_t CAP_PERMITTED;
cap_value_t CAP_SET;
