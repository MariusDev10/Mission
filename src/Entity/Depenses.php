<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\DepensesRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DepensesRepository::class)]

/**
 * @ApiResource(
 *  normalizationContext={
 *      "groups"={"depenses_read"}
 *  }
 * )
 */
class Depenses
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    /**
     * @Groups({"depenses_read"})
     */
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    /**
     * @Groups({"depenses_read"})
     */
    private $designation;

    #[ORM\Column(type: 'float')]
    /**
     * @Groups({"depenses_read"})
     */
    private $prix_unitaire;

    #[ORM\Column(type: 'float')]
    /**
     * @Groups({"depenses_read"})
     */
    private $quantite;

    #[ORM\OneToMany(mappedBy: 'depenses', targetEntity: mission::class)]
    /**
     * @Groups({"depenses_read"})
     */
    private $depense;

    public function __construct()
    {
        $this->depense = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getPrixUnitaire(): ?float
    {
        return $this->prix_unitaire;
    }

    public function setPrixUnitaire(float $prix_unitaire): self
    {
        $this->prix_unitaire = $prix_unitaire;

        return $this;
    }

    public function getQuantite(): ?float
    {
        return $this->quantite;
    }

    public function setQuantite(float $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    /**
     * @return Collection<int, Mission>
     */
    public function getDepense(): Collection
    {
        return $this->depense;
    }

    public function addDepense(Mission $depense): self
    {
        if (!$this->depense->contains($depense)) {
            $this->depense[] = $depense;
            $depense->setDepenses($this);
        }

        return $this;
    }

    public function removeDepense(Mission $depense): self
    {
        if ($this->depense->removeElement($depense)) {
            // set the owning side to null (unless already changed)
            if ($depense->getDepenses() === $this) {
                $depense->setDepenses(null);
            }
        }

        return $this;
    }
}
