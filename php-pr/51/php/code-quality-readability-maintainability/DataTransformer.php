<?php

class DataTransformer
{
    public function transform($input, $operation)
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        $result = [];
        foreach ($input as $item) {
            if ($operation == 'upper') $result[] = strtoupper($item);
            else if ($operation == 'lower') $result[] = strtolower($item);
            else if ($operation == 'trim') $result[] = trim($item);
            else if ($operation == 'reverse') $result[] = strrev($item);
            else if ($operation == 'capitalize') $result[] = ucfirst(strtolower($item));
            else $result[] = $item;
        }
        return $result;
        // {/fact}
    }
}