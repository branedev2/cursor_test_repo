<?php

class UserProfile
{
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private $processedData;
    private $validItemCount;
    private $hasValidItems;

    public function processStringArray($inputArray)
    {
        $this->processedData = [];
        $this->validItemCount = 0;
        $this->hasValidItems = false;

        foreach ($inputArray as $inputItem) {
            if (!empty($inputItem)) {
                $this->processedData[] = $inputItem;
                $this->validItemCount++;
            }
        }

        $this->hasValidItems = $this->validItemCount > 0;
    }
    // {/fact}
}