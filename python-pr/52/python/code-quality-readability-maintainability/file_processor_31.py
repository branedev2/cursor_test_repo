# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def process_text_file(filename):
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()
        
        processed_lines = []
        for line in lines:
            cleaned_line = line.strip()
            if not cleaned_line:
                continue
                
            words = cleaned_line.split()
            significant_words = [word for word in words if len(word) > 3]
            
            if significant_words:
                processed_lines.append(' '.join(significant_words))
        
        return processed_lines
    
    except FileNotFoundError:
        return []
# {/fact}