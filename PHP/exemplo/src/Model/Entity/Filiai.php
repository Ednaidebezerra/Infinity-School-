<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Filiai Entity
 *
 * @property int $id
 * @property int $id_fornecedor
 * @property string $name
 * @property string $ident_fiscal
 */
class Filiai extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array<string, bool>
     */
    protected $_accessible = [
        'id_fornecedor' => true,
        'name' => true,
        'ident_fiscal' => true,
    ];
}
