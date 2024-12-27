<?php

namespace App\Filament\Resources\OfficeSpaceResource\Pages;

use App\Filament\Resources\OfficeSpaceResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditOfficeSpace extends EditRecord
{
    protected static string $resource = OfficeSpaceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
