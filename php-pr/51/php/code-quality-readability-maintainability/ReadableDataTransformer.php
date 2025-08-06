<?php

class ReadableDataTransformer
{
    private $transformations;

    public function __construct()
    {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        $this->transformations = [
            'upper' => 'strtoupper',
            'lower' => 'strtolower',
            'trim' => 'trim',
            'reverse' => 'strrev',
            'capitalize' => [$this, 'capitalizeString']
        ];
        // {/fact}
    }

    public function transform($input, $operation)
    {
        if (!isset($this->transformations[$operation])) {
            return $input; // Return original if operation not supported
        }

        $transformation = $this->transformations[$operation];
        return array_map($transformation, $input);
    }

    private function capitalizeString($input)
    {
        return ucfirst(strtolower($input));
    }
}